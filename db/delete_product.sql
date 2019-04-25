delete from product
where product_id = $1;

select * from product
order by product_id desc;