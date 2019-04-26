update promotion
set promo_title = $2,
promo_desc = $3,
promo_exp = $4
where promotion_id = $1;

select * from promotion
order by promotion_id desc;