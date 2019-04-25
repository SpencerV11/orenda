delete from promotion
where promotion_id = $1;

select * from promotion
order by promotion_id desc;