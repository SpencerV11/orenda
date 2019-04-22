delete from review
where review_id = $1;

select * from client inner join review on (client.client_id = review.review_client_id)
order by review_id desc;