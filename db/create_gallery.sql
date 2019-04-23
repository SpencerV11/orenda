insert into gallery (
    before_img,
    after_img,
    description,
    gallery_service_title
) values (
    $1,
    $2,
    $3,
    $4  
);

select * from gallery
order by gallery_id desc;