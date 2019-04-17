SELECT first_name, last_name, description, rating
    FROM client INNER JOIN review ON (client.client_id = review.review_client_id);