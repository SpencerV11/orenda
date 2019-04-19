insert into review (
    review_client_id,
    description,
    rating
) values (
    $1,
    $2,
    $3
);

SELECT * FROM client INNER JOIN review ON (client.client_id = review.review_client_id);
