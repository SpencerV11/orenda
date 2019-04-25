update product 
set product_line = $2,
product_desc = $3,
product_img = $4
where product_id = $1;

select * from product
order by product_id desc;