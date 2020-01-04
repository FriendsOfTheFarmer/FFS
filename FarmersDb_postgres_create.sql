CREATE TABLE "Market" (
	"Market_Id" serial NOT NULL,
	"Market_Name" varchar(255) NOT NULL UNIQUE,
	"Market_Location" varchar(255) NOT NULL,
	"Market_Details" varchar(500) NOT NULL,
	"Market_Hours_Id" serial NOT NULL,
	"Market_Vendor_Id" serial NOT NULL UNIQUE,
	CONSTRAINT "Market_pk" PRIMARY KEY ("Market_Id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Business_Hours" (
	"Hours_Id" serial NOT NULL,
	"Hours_Day" integer NOT NULL,
	"Hours_Open" TIME NOT NULL,
	"Hours_Close" TIME NOT NULL,
	CONSTRAINT "Business_Hours_pk" PRIMARY KEY ("Hours_Id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Vendor" (
	"Vendor_Id" serial NOT NULL,
	"Vendor_Name" varchar(255) NOT NULL UNIQUE,
	"Vendor_Phone" integer NOT NULL,
	"Vendor_Website" varchar(255) NOT NULL,
	"Vendor_Email" varchar(255) NOT NULL,
	"Vendor_Bio" varchar(500) NOT NULL,
	"Vendor_Market_Id" serial NOT NULL UNIQUE,
	"Vendor_Hours_Id" integer NOT NULL,
	"Vendor_Item_Id" serial NOT NULL UNIQUE,
	CONSTRAINT "Vendor_pk" PRIMARY KEY ("Vendor_Id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Market_Vendor" (
	"Market_Vendor_Id" serial NOT NULL,
	"Market_Vendor_Date" DATE NOT NULL,
	CONSTRAINT "Market_Vendor_pk" PRIMARY KEY ("Market_Vendor_Id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Item" (
	"Item_Id" serial NOT NULL,
	"Item_Name" varchar(255) NOT NULL UNIQUE,
	"Vendor_Item_Id" serial(255) NOT NULL UNIQUE,
	CONSTRAINT "Item_pk" PRIMARY KEY ("Item_Id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Vendor_Item" (
	"Vendor_Item_Id" serial NOT NULL,
	"Vendor_Item_Details" varchar(255) NOT NULL,
	"Vendors_Items_Price" numeric(4,2) NOT NULL,
	CONSTRAINT "Vendor_Item_pk" PRIMARY KEY ("Vendor_Item_Id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "Market" ADD CONSTRAINT "Market_fk0" FOREIGN KEY ("Market_Hours_Id") REFERENCES "Business_Hours"("Hours_Id");
ALTER TABLE "Market" ADD CONSTRAINT "Market_fk1" FOREIGN KEY ("Market_Vendor_Id") REFERENCES "Market_Vendor"("Market_Vendor_Id");


ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_fk0" FOREIGN KEY ("Vendor_Market_Id") REFERENCES "Market_Vendor"("Market_Vendor_Id");
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_fk1" FOREIGN KEY ("Vendor_Hours_Id") REFERENCES "Business_Hours"("Hours_Id");
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_fk2" FOREIGN KEY ("Vendor_Item_Id") REFERENCES "Vendor_Item"("Vendor_Item_Id");


ALTER TABLE "Item" ADD CONSTRAINT "Item_fk0" FOREIGN KEY ("Vendor_Item_Id") REFERENCES "Vendor_Item"("Vendor_Item_Id");
