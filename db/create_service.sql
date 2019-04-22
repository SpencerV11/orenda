insert into service (
    service_title,
    service_desc,
    time_limit,
    service_cost
) values (
    $1,
    $2,
    $3,
    $4
);

select * from service;