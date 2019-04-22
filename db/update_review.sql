update review
set description = $2,
rating = $3
where review_id = $1;

SELECT * FROM client INNER JOIN review ON (client.client_id = review.review_client_id)
order by review_id desc;