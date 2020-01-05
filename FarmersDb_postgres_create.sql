CREATE TABLE "market" (
	"market_id" serial NOT NULL,
	"market_name" varchar(255) NOT NULL UNIQUE,
	"market_phone" varchar(255) NOT NULL,
	"market_location" varchar(255) NOT NULL,
	"market_website" varchar(255) NOT NULL,
	"market_details" varchar(500) NOT NULL,
	CONSTRAINT "market_pk" PRIMARY KEY ("market_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "business_hours" (
	"hours_id" serial NOT NULL,
	"hours_day" integer NOT NULL,
	"hours_open" TIME NOT NULL,
	"hours_close" TIME NOT NULL,
	"market_hours_id" integer NOT NULL,
	CONSTRAINT "business_hours_pk" PRIMARY KEY ("hours_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "vendor" (
	"vendor_id" serial NOT NULL,
	"vendor_name" varchar(255) NOT NULL UNIQUE,
	"vendor_phone" varchar(255) NOT NULL,
	"vendor_website" varchar(255) NOT NULL,
	"vendor_email" varchar(255) NOT NULL,
	"vendor_bio" varchar(500) NOT NULL,
	CONSTRAINT "vendor_pk" PRIMARY KEY ("vendor_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "date" (
	"date_id" serial NOT NULL,
	"market_vendor_date" DATE NOT NULL,
	"market_id" integer NOT NULL,
	"vendor_id" integer NOT NULL,
	CONSTRAINT "date_pk" PRIMARY KEY ("date_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "item" (
	"item_id" serial NOT NULL,
	"item_name" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "item_pk" PRIMARY KEY ("item_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "vendor_item" (
	"vendor_item_id" serial NOT NULL,
	"vendor_item_price" numeric(4,2) NOT NULL,
	"vendor_item_details" varchar(255) NOT NULL,
	"vendor_id" integer NOT NULL,
	"item_id" integer NOT NULL,
	"date_id" integer NOT NULL,
	"market_id" integer NOT NULL,
	CONSTRAINT "vendor_item_pk" PRIMARY KEY ("vendor_item_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "business_hours" ADD CONSTRAINT "business_hours_fk0" FOREIGN KEY ("market_hours_id") REFERENCES "market"("market_id");


ALTER TABLE "date" ADD CONSTRAINT "date_fk0" FOREIGN KEY ("market_id") REFERENCES "market"("market_id");
ALTER TABLE "date" ADD CONSTRAINT "date_fk1" FOREIGN KEY ("vendor_id") REFERENCES "vendor"("vendor_id");


ALTER TABLE "vendor_item" ADD CONSTRAINT "vendor_item_fk0" FOREIGN KEY ("vendor_id") REFERENCES "vendor"("vendor_id");
ALTER TABLE "vendor_item" ADD CONSTRAINT "vendor_item_fk1" FOREIGN KEY ("item_id") REFERENCES "item"("item_id");
ALTER TABLE "vendor_item" ADD CONSTRAINT "vendor_item_fk2" FOREIGN KEY ("date_id") REFERENCES "date"("date_id");
ALTER TABLE "vendor_item" ADD CONSTRAINT "vendor_item_fk3" FOREIGN KEY ("market_id") REFERENCES "market"("market_id");
