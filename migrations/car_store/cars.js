const cars = [
    {
      "id": 1,
      "name": "Toyota Corolla",
      "categorie": "Berline",
      "color": "Blanc",
      "other": ["GPS", "Climatisation", "ABS"],
      "createdAt": "2024-10-07T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Honda Civic",
      "categorie": "Berline",
      "color": "Noir",
      "other": ["Sièges chauffants", "Bluetooth"],
      "createdAt": "2024-10-07T10:10:00Z"
    },
    {
      "id": 3,
      "name": "Tesla Model 3",
      "categorie": "Électrique",
      "color": "Rouge",
      "other": ["Autopilot", "Climatisation", "Régulateur de vitesse"],
      "createdAt": "2024-10-07T10:15:00Z"
    },
    {
      "id": 4,
      "name": "Ford Mustang",
      "categorie": "Sport",
      "color": "Bleu",
      "other": ["V8", "Échappement sport"],
      "createdAt": "2024-10-07T10:20:00Z"
    },
    {
      "id": 5,
      "name": "Chevrolet Camaro",
      "categorie": "Sport",
      "color": "Jaune",
      "other": ["V8", "Toit ouvrant"],
      "createdAt": "2024-10-07T10:25:00Z"
    },
    {
      "id": 6,
      "name": "BMW X5",
      "categorie": "SUV",
      "color": "Gris",
      "other": ["4x4", "Caméra de recul", "Toit panoramique"],
      "createdAt": "2024-10-07T10:30:00Z"
    },
    {
      "id": 7,
      "name": "Mercedes Classe C",
      "categorie": "Berline",
      "color": "Argent",
      "other": ["GPS", "Climatisation"],
      "createdAt": "2024-10-07T10:35:00Z"
    },
    {
      "id": 8,
      "name": "Audi Q7",
      "categorie": "SUV",
      "color": "Noir",
      "other": ["4x4", "Régulateur de vitesse"],
      "createdAt": "2024-10-07T10:40:00Z"
    },
    {
      "id": 9,
      "name": "Volkswagen Golf",
      "categorie": "Compacte",
      "color": "Blanc",
      "other": ["Bluetooth", "Climatisation"],
      "createdAt": "2024-10-07T10:45:00Z"
    },
    {
      "id": 10,
      "name": "Porsche 911",
      "categorie": "Sport",
      "color": "Rouge",
      "other": ["Échappement sport", "V6"],
      "createdAt": "2024-10-07T10:50:00Z"
    },
    {
      "id": 11,
      "name": "Nissan Leaf",
      "categorie": "Électrique",
      "color": "Bleu",
      "other": ["Autonomie longue", "Charge rapide"],
      "createdAt": "2024-10-07T10:55:00Z"
    },
    {
      "id": 12,
      "name": "Jeep Wrangler",
      "categorie": "SUV",
      "color": "Vert",
      "other": ["4x4", "Tout-terrain"],
      "createdAt": "2024-10-07T11:00:00Z"
    },
    {
      "id": 13,
      "name": "Ferrari F8",
      "categorie": "Sport",
      "color": "Rouge",
      "other": ["V8", "Échappement sport"],
      "createdAt": "2024-10-07T11:05:00Z"
    },
    {
      "id": 14,
      "name": "Hyundai Tucson",
      "categorie": "SUV",
      "color": "Blanc",
      "other": ["Climatisation", "4x4"],
      "createdAt": "2024-10-07T11:10:00Z"
    },
    {
      "id": 15,
      "name": "Kia Soul",
      "categorie": "Compacte",
      "color": "Gris",
      "other": ["Bluetooth", "Régulateur de vitesse"],
      "createdAt": "2024-10-07T11:15:00Z"
    },
    {
      "id": 16,
      "name": "Mazda CX-5",
      "categorie": "SUV",
      "color": "Rouge",
      "other": ["Climatisation", "Caméra de recul"],
      "createdAt": "2024-10-07T11:20:00Z"
    },
    {
      "id": 17,
      "name": "Volvo XC90",
      "categorie": "SUV",
      "color": "Argent",
      "other": ["4x4", "GPS"],
      "createdAt": "2024-10-07T11:25:00Z"
    },
    {
      "id": 18,
      "name": "Peugeot 3008",
      "categorie": "SUV",
      "color": "Bleu",
      "other": ["Bluetooth", "Climatisation"],
      "createdAt": "2024-10-07T11:30:00Z"
    },
    {
      "id": 19,
      "name": "Renault Clio",
      "categorie": "Compacte",
      "color": "Rouge",
      "other": ["Climatisation", "GPS"],
      "createdAt": "2024-10-07T11:35:00Z"
    },
    {
      "id": 20,
      "name": "Citroën C3",
      "categorie": "Compacte",
      "color": "Blanc",
      "other": ["Bluetooth", "Régulateur de vitesse"],
      "createdAt": "2024-10-07T11:40:00Z"
    },
    {
      "id": 21,
      "name": "Fiat 500",
      "categorie": "Mini",
      "color": "Jaune",
      "other": ["Bluetooth", "Toit ouvrant"],
      "createdAt": "2024-10-07T11:45:00Z"
    },
    {
      "id": 22,
      "name": "Alfa Romeo Giulia",
      "categorie": "Berline",
      "color": "Noir",
      "other": ["V6", "GPS"],
      "createdAt": "2024-10-07T11:50:00Z"
    },
    {
      "id": 23,
      "name": "Lamborghini Aventador",
      "categorie": "Sport",
      "color": "Vert",
      "other": ["V12", "Échappement sport"],
      "createdAt": "2024-10-07T11:55:00Z"
    },
    {
      "id": 24,
      "name": "Mitsubishi Outlander",
      "categorie": "SUV",
      "color": "Noir",
      "other": ["4x4", "GPS"],
      "createdAt": "2024-10-07T12:00:00Z"
    },
    {
      "id": 25,
      "name": "Jaguar F-Type",
      "categorie": "Sport",
      "color": "Blanc",
      "other": ["V6", "Climatisation"],
      "createdAt": "2024-10-07T12:05:00Z"
    }
  ]
  

module.exports = cars