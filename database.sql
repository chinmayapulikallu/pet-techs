--Database name pet_techs


CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE NOT NULL,
  user_email varchar (80) NOT NULL,
  password VARCHAR (1000) NOT NULL,
  phone_number VARCHAR (20) NOT NULL,
  hear_about text NOT NULL,
  user_type int NOT NULL
);

CREATE TABLE client (
  user_id INT NOT NULL
        REFERENCES "user" (id)
        ON DELETE CASCADE ,
  client_name varchar (80) NOT NULL,
  home_address_house varchar NOT NULL,
  apt_suite varchar (80),
  city varchar (100) NOT NULL,
  state varchar (20) NOT NULL,
  zip_code int NOT NULL,
  profile_img text DEFAULT '3e541de1f0419c15034e45c05eb3becd',
  about_client text NOT NULL,
  about_home text NOT NULL,
  about_equipment text NOT NULL,
  contact_name_1 varchar (80),
  contact_phone_1 varchar (20),
  contact_email_1 varchar (100),
  vet_clinic varchar (250),
  clinic_address varchar (250),
  clinic_phone varchar (20),
  transport boolean 
);

CREATE TABLE vet_tech (
  
  user_id INT NOT NULL
        REFERENCES "user" (id)
        ON DELETE CASCADE ,
  vet_name varchar (80) NOT NULL,
  home_address_house varchar (100) NOT NULL,
  apt_suite varchar (80),
  city varchar (80) NOT NULL,
  state varchar (80) NOT NULL,
  zip_code int NOT NULL,
  profile_img text DEFAULT '3e541de1f0419c15034e45c05eb3becd',
  sleep_over boolean DEFAULT FALSE,
  boarding boolean DEFAULT FALSE,
  dropin_care boolean DEFAULT FALSE,
  hospice boolean DEFAULT FALSE,
  about_vet text NOT NULL,
  dogs boolean DEFAULT FALSE,
  cats boolean DEFAULT FALSE,
  other boolean DEFAULT FALSE,
  vet_available boolean DEFAULT FALSE,
  zero_two boolean DEFAULT FALSE,
  two_four boolean DEFAULT FALSE,
  four_eight boolean DEFAULT FALSE,
  not_available boolean DEFAULT FALSE,
  small_dog boolean DEFAULT FALSE,
  medium_dog boolean DEFAULT FALSE,
  large_dog boolean DEFAULT FALSE,
  giant_dog boolean DEFAULT FALSE,
  pet_younger_than_one boolean ,
  pet_more_than_one_family boolean,
  equipment_list text ,
  experience int NOT NULL ,
  certifications text, 
  current_job_title text,
  expertise text,
  bioYourself text,
  CPR_first_aid boolean DEFAULT FALSE  ,
  oral_medication boolean DEFAULT FALSE ,
  injectable_medication boolean DEFAULT FALSE ,
  exp_older_pet boolean DEFAULT FALSE ,
  exp_special_pet boolean DEFAULT FALSE  ,
  daily_exercise boolean DEFAULT FALSE  ,
  pet_longer_than_a_week boolean DEFAULT FALSE  ,
  diabetic_insulin_care boolean DEFAULT FALSE  
);

CREATE TABLE pet (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL
            REFERENCES "user" (id)
            ON DELETE CASCADE ,
  pet_type varchar (50) NOT NULL,
  other_pet varchar (50) ,
  pet_name varchar (20) NOT NULL,
  weight int NOT NULL,
  age int NOT NULL,
  sex varchar NOT NULL,
  breed varchar (50) NOT NULL,
  pet_bio varchar NOT NULL,
  profile_img text DEFAULT '3e541de1f0419c15034e45c05eb3becd',
  food_brand varchar (250) NOT NULL,
  feeding_per_day int NOT NULL,
  amount_per_meal varchar (100) NOT NULL,
  other_food varchar (500),
  pet_behavior text NOT NULL,
  care_equipment text
);

CREATE TABLE medication (
  id SERIAL PRIMARY KEY,
  pet_id INT NOT NULL
         REFERENCES pet (id)
         ON DELETE CASCADE ,
  medication_name varchar (500) DEFAULT NULL,
  dosage varchar (500)  DEFAULT NULL,
  dosage_time timestamp with time zone  DEFAULT NULL
);

CREATE TABLE client_request (
  id SERIAL PRIMARY KEY,
  pet_id INT NOT NULL
         REFERENCES pet (id)
         ON DELETE CASCADE ,
  vet_id INT NOT NULL
         REFERENCES "user" (id)
         ON DELETE CASCADE ,
  start_date_time timestamp with time zone ,
  end_date_time timestamp with time zone,
  add_info text,
  request_status int,
  service_select text,
  input_info text
);



