const mongoose = require("mongoose");
const { Product } = require("./models/product"); // Import your Product model

mongoose.connect("mongodb+srv://youshay:1234@cluster0.if2cui2.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample product data
const sampleProducts = [  
    {
    "name": "Diamond Solitaire Necklace",
    
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6hQCRXWk0i1Z5H3ysh01YTFJPis1dGef2A&usqp=CAU",
    
    "price": 479,
  
    "category": "Necklaces",
  
    "description": "A classic solitaire diamond pendant necklace, perfect for everyday wear.",
    
    },
    {
    
    "name": "Pearl Choker Necklace",
    
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejjz2rLDb8kAY9nSUBLsUupW2m2atBo8hZg&usqp=CAU",
    
    "price": 239,
  
    "category": "Necklaces",
    
    "description": "A beautiful pearl choker necklace with a vintage-inspired design.",  
    },
    
    {
    
    "name": "Gold Chain Necklace",
    
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJ7UPN_Rwi45q-0srRyndP7GojbcRRANOiA&usqp=CAU",
    
    "price": 319,
  
    "category": "Necklaces",
    
    "description": "A classic 14K gold chain necklace with a lobster clasp closure.",
    
    },
    
    {
    
    "name": "Emerald Pendant Necklace",
    
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK2UWwcd9JheyMRhr74V4n_2gUxgOGlurXg&usqp=CAU",
    
    "price": 639,
  
    "category": "Necklaces",
    
    "description": "A brilliant emerald pendant set in 14K white gold on a delicate chain.",
    },
    
    {
    
    "name": "Diamond Tennis Necklace",
    
    "image": "https://images.unsplash.com/photo-1570891836868-673ee4818f81?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwbmVja2xhY2V8ZW58MHx8MHx8fDA%3D",
    
    "price": 1599,
  
    "category": "Necklaces",
    
    "description": "A dazzling diamond tennis necklace with 100 diamonds set in platinum.",
    
    },
    {
    
    "name": "Diamond Stud Earrings",
    
    "image": "https://images.unsplash.com/photo-1616121341778-0dd435d03d23?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEVhcnJpbmdzfGVufDB8fDB8fHww",
    
    "price": 479,
  
    "category": "Earrings",
    
    "description": "Brilliant round diamond stud earrings set in 14K white gold.",
    
    },
    
    {
    
    "name": "Hoop Earrings",
    
    "image": "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWFycmluZ3N8ZW58MHx8MHx8fDA%3D",
    
    
    "price": 120,
  
    "category": "Earrings",
    
    
    "description": "Sleek 14K gold hoop earrings for a polished everyday look.",
    
    },
    
    {
    
    "name": "Pearl Drop Earrings",
    
    "image": "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWFycmluZ3N8ZW58MHx8MHx8fDA%3D",
    
    "price": 160,
  
    "category": "Earrings",
    
    "description": "Graceful freshwater pearl drop earrings on a 14K gold post.",
    
    },
    
    {
    
    "name": "Ruby Stud Earrings",
    
    "image": "https://images.unsplash.com/photo-1622584940190-0cedd29ebaa8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEVhcnJpbmdzfGVufDB8fDB8fHww",
    
    "price": 639,
  
    "category": "Earrings",
    
    "description": "Exquisite ruby stud earrings set in 14K rose gold.",
    
    },
    
    {
    
    "name": "Sapphire Drop Earrings",
    
    "image": "https://images.unsplash.com/photo-1621939745912-aad97fd3a34d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEVhcnJpbmdzfGVufDB8fDB8fHww",
    
    
    "price": 319,
  
    "category": "Earrings",
    
    "description": "Stunning sapphire and diamond drop earrings in platinum.",
    
    },
    
    {
    
    "name": "Tennis Bracelet",
    
    "image": "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D",
    
    
    "price": 1039,
  
    "category": "Bracelets",
    
    
    "description": "A dazzling diamond tennis bracelet with a timeless elegant design.",
  
    
    },
    
    {
    
    "name": "Bangle Bracelet",
    
    "image": "https://plus.unsplash.com/premium_photo-1673285096704-f94a6712c243?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D",
    
    
    "price": 319,
  
    "category": "Bracelets",
    
    "description": "Sleek and stackable 14K gold bangle bracelet.",
    
    },
    
    {
    
    "name": "Charm Bracelet",
    
    "image": "https://images.unsplash.com/photo-1611235116292-df7f928f3a0f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D",
    
    "price": 280,
  
    "category": "Bracelets",
    
    "description": "Personalized charm bracelet with whimsical charms.",
    
    },
    
    {
    
    "name": "Pearl Bracelet",
    
    "image": "https://images.unsplash.com/photo-1632670549675-952dca613fe6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJyYWNlbGV0fGVufDB8fDB8fHww",
    
    "mrp": 250,
    
    "price": 200,
  
    "category": "Bracelets",
    
    "description": "Beautiful pearl bracelet with 14K white gold clasp.",
    
    },
    {
    
    "name": "Diamond Solitaire Ring",
    
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    
    
    "price": 1039,
  
    "category": "Rings",
    
    "description": "A classic diamond solitaire ring set in platinum.",
    
    },
    
    {
    
    "name": "Sapphire Cocktail Ring",
    
    "image": "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    
    "price": 479,
  
    "category": "Rings",
    
    "description": "Stunning sapphire cocktail ring accented with diamonds.",
    
    },
    
    {
    
    "name": "Ruby Ring",
    
    "image": "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpbmd8ZW58MHx8MHx8fDA%3D",
    
    "price": 639,
  
    "category": "Rings",
    
    "description": "Vibrant ruby gemstone ring set in 14K rose gold.",
    
    },
    
    {
    
    "name": "Pearl Ring",
    
    "image": "https://images.unsplash.com/photo-1481980235850-66e47651e431?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJpbmd8ZW58MHx8MHx8fDA%3D",
    
    "price": 239,
  
    "category": "Rings",
    
    "description": "Classic pearl ring with a 14K white gold band.",
    
    },
    
    {
    
    "name": "Emerald Cut Diamond Ring",
    
    "image": "https://images.unsplash.com/photo-1613945407943-59cd755fd69e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJpbmd8ZW58MHx8MHx8fDA%3D",
    
    "price": 1999,
  
    "category": "Rings",
    
    "description": "Breathtaking emerald cut diamond ring set in platinum.",
    
    },
    
  
    {
    
    "name": "Diamond Solitaire Pendant",
    
    "image": "https://images.unsplash.com/photo-1574814073364-e865c9b6a3a5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVuZGFudHxlbnwwfHwwfHx8MA%3D%3D",
    
    "price": 639,
  
    "category": "Pendants",
    
    "description": "Sparkling round diamond solitaire pendant in 14K white gold.",
    
    },
    
    {
    
    "name": "Ruby Pendant",
    
    "image": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVuZGFudHxlbnwwfHwwfHx8MA%3D%3D",
    
    "price": 479,
  
    "category": "Pendants",
    
    "description": "Vibrant ruby gemstone pendant set in 14K rose gold.",
    
    },
    
    {
    
    "name": "Sapphire Pendant",
    
    "image": "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGVuZGFudHxlbnwwfHwwfHx8MA%3D%3D",
    
    
    "price": 559,
  
    "category": "Pendants",
    
    "description": "Stunning sapphire pendant on a delicate 14K white gold chain.",
    
    },
    
    {
    
    "name": "Pearl Pendant",
    
    "image": "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBlbmRhbnR8ZW58MHx8MHx8fDA%3D",
    
    "price": 239,
  
    "category": "Pendants",
    
    "description": "Lustrous freshwater pearl pendant on a 14K yellow gold chain.",
    
    },
    
    {
    
    "name": "Emerald Pendant",
    
    "image": "https://images.unsplash.com/photo-1610661022658-5068c4d8f286?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBlbmRhbnR8ZW58MHx8MHx8fDA%3D",
    
    "price": 1039,
  
    "category": "Pendants",
    
    "description": "Mesmerizing emerald pendant surrounded by diamonds.", 
    },
    
    {
    
    "name": "Diamond Bangle",
    
    "image": "https://plus.unsplash.com/premium_photo-1681276170281-1caea3d5f670?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuZ2xlc3xlbnwwfHwwfHx8MA%3D%3D",
    
    
    "price": 1039,
  
    "category": "Bangles",
    
    
    "description": "Slim diamond tennis bracelet bangle in 14K white gold.",
    
    },
    
    {
    
    "name": "Gemstone Bangle",
    
    "image": "https://images.unsplash.com/photo-1617191880362-aac615de3c26?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhbmdsZXN8ZW58MHx8MHx8fDA%3D",
    
    
    "price": 319,
  
    "category": "Bangles",
    
    "description": "Colorful gemstone bangle with carved details.",
    
    },
    
    {
    
    "name": "Gold Bangle",
    
    "image": "https://images.unsplash.com/photo-1606293926249-ed22e446d476?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmdsZXN8ZW58MHx8MHx8fDA%3D",
    
    
    "price": 479,
  
    "category": "Bangles",
    
    "description": "Polished 14K yellow gold engraved bangle.",
    
    },
  ];

// Insert sample products into the database
Product.insertMany(sampleProducts)
  .then((products) => {
    console.log("Sample products inserted successfully:", products);
  })
  .catch((err) => {
    console.error("Error inserting sample products:", err);
  })
  .finally(() => {
    mongoose.connection.close(); // Close the database connection after inserting data
  });
