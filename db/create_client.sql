insert into client
(
    first_name,
    last_name,
    email,
    password,
    phone_number
) values 
(
    $1,
    $2,
    $3,
    $4,
    $5
)
returning client_id, first_name, last_name, email, phone_number;