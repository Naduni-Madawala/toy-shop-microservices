USE toyshop;

CREATE TABLE IF NOT EXISTS ratings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255),
  rating INT,
  comment VARCHAR(255)
);

INSERT INTO ratings (product_name, rating, comment) VALUES
('Ferrari SF-24 Diecast Model Car 2024 Formula 1', 5, 'Excellent model car'),
('Steve Harrington Funko Pop', 4, 'Great StrangerThings figure'),
('MINIATURA CARRO F1 REDBULL MAX VERSTAPPEN RB19', 5, 'High quality'),
('Stranger Things Demogorgon Pop! Vinyl Figure', 5, 'Very detailed');

