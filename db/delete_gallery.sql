delete from gallery
where gallery_id = $1;

select * from gallery
order by gallery_id desc;