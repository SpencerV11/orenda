delete from service 
where service_id = $1;

select * from service
order by service_id desc;