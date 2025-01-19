import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications import InceptionV3
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout, BatchNormalization
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix
import numpy as np
import tkinter as tk
from tkinter import filedialog
import seaborn as sns
import matplotlib.pyplot as plt
from tensorflow.keras.callbacks import EarlyStopping, ReduceLROnPlateau

# Define the early stopping and learning rate scheduler callbacks
early_stopping = EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)
reduce_lr = ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3, min_lr=1e-7)

# Class labels (this should match your model's output classes)
class_labels = [
    "Healthy", 
    "Early Blight", 
    "Late Blight", 
    "Bacterial Spot", 
    "Septoria Leaf Spot", 
    "Spider Mites", 
    "Powdery Mildew", 
    "Leaf Mold", 
    "Yellow Leaf Curl Virus", 
    "Root Rot"
]

# Function to load and preprocess the image
def prepare_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))  # Adjust based on the model
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array = img_array / 255.0  # Normalize the image (if needed)
    return img_array

# Data Augmentation for training data
datagen = ImageDataGenerator(
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest',
    brightness_range=[0.8, 1.2]  # Adding brightness variation
)

# Load the pre-trained InceptionV3 model
base_model = InceptionV3(weights='imagenet', include_top=False)  # Load pre-trained model
x = base_model.output
x = GlobalAveragePooling2D()(x)  # Add global average pooling layer
x = Dense(1024, activation='relu')(x)
x = BatchNormalization()(x)  # Adding BatchNormalization to improve stability
x = Dropout(0.6)(x)  # Increased Dropout for regularization
predictions = Dense(len(class_labels), activation='softmax')(x)  # Output layer for your classes

# Build the model
model = Model(inputs=base_model.input, outputs=predictions)

# Freeze the base model layers initially
for layer in base_model.layers:
    layer.trainable = False

# Compile the model with a small learning rate to begin training
model.compile(optimizer=Adam(learning_rate=1e-4), loss='categorical_crossentropy', metrics=['accuracy'])

# Open file dialog to upload the image
root = tk.Tk()
root.withdraw()  # Hide the root window
img_path = filedialog.askopenfilename(title="Select Image", filetypes=[("Image files", ".jpg;.jpeg;*.png")])

if img_path:
    # Prepare the image
    input_data = prepare_image(img_path)

    # Predict the disease using the model
    predictions = model.predict(input_data)
    
    # Print all the class probabilities (in percentage)
    print("Class Probabilities:")
    for idx, prob in enumerate(predictions[0]):
        print(f"{class_labels[idx]}: {prob*100:.2f}%")
    
    # Find the predicted class index and probability
    predicted_class_index = np.argmax(predictions)
    predicted_class_probability = predictions[0][predicted_class_index]
    
    # Print the predicted class with confidence in percentage
    print(f"\nPredicted Disease: {class_labels[predicted_class_index]} (Confidence: {predicted_class_probability*100:.2f}%)")
    
    # Setting a confidence threshold (e.g., 70% confidence)
    confidence_threshold = 0.7

    # Check if the confidence is above the threshold
    if predicted_class_probability >= confidence_threshold:
        print(f"Prediction is confident with {predicted_class_probability*100:.2f}% confidence")
    else:
        print(f"Prediction Confidence is low. Confidence: {predicted_class_probability*100:.2f}%. The model is uncertain.")
else:
    print("No file selected.")

# Fine-Tuning: Unfreeze more layers of the base model and train again
for layer in base_model.layers[-20:]:  # Unfreeze more layers
    layer.trainable = True

# Compile the model again with a lower learning rate for fine-tuning
model.compile(optimizer=Adam(learning_rate=1e-5), loss='categorical_crossentropy', metrics=['accuracy'])

# For evaluating precision, recall, and F1 score, use the validation data:
# Define your validation data (val_data, val_labels) with one-hot encoded labels

# Example of predictions from validation data:
# val_data = ...  # Your validation images
# val_labels = ...  # Your validation one-hot encoded labels
# val_predictions = model.predict(val_data)
# predicted_classes = np.argmax(val_predictions, axis=-1)

# Calculate precision, recall, and F1 score
# precision = precision_score(val_labels, predicted_classes, average='weighted')
# recall = recall_score(val_labels, predicted_classes, average='weighted')
# f1 = f1_score(val_labels, predicted_classes, average='weighted')

# Print precision, recall, and F1 score
# print(f"Precision: {precision:.4f}")
# print(f"Recall: {recall:.4f}")
# print(f"F1 Score: {f1:.4f}")

# Calculate Confusion Matrix for debugging
# cm = confusion_matrix(val_labels, predicted_classes)
# sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=class_labels, yticklabels=class_labels)
# plt.xlabel('Predicted')
# plt.ylabel('True')
# plt.show()