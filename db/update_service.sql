update service
set service_title = $2,
service_desc = $3,
time_limit = $4,
service_cost = $5
where service_id = $1;

select * from service
order by service_id desc;