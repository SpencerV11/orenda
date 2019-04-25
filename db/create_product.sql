insert into product (
    product_line,
    product_desc,
    product_img
) values (
    $1,
    $2,
    $3
);

select * from product
order by product_id desc;