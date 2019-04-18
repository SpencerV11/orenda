update review
set description = $2,
rating = $3
where review_id = $1;

select * from review;