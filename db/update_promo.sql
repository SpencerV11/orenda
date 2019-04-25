update promotion
set promotion_title = $2,
description = $3,
ex_date = $4
where promotion_id = $1;

select * from promotion
order by promotion_id desc;