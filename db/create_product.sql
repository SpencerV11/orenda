insert into product (
    product_line,
    product_desc,
    url
) values (
    $1,
    $2,
    $3
);

select * from product
order by product_id desc;