SELECT *
    FROM client INNER JOIN review ON (client.client_id = review.review_client_id);