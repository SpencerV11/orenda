insert into gallery (
    before_after_img,
    description,
    gallery_service_title
) values (
    $1,
    $2,
    $3
);

select * from gallery
order by gallery_id desc;