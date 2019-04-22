delete from review
where review_id = $1;

SELECT * FROM client INNER JOIN review ON (client.client_id = review.review_client_id)
order by review_id desc;