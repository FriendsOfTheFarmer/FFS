case types.SUBMIT_VENDOR_DETAILS: {
      let {
        vendorName,
        blogPost,
        vendorEmail,
        vendorWebsite,
        vendorPhone,
        counter
      } = state;
      let senderObj = {
        vendor_name: vendorName,
        vendor_bio: blogPost,
        vendor_email: vendorEmail,
        vendor_website: vendorWebsite,
        vendor_phone: vendorPhone
      };
      console.log("sender Object", senderObj);
      counter = 0;
      return {
        ...state,
        vendorEmail: "",
        vendorWebsite: "",
        vendorPhone: "",
        blogPost: "",
        counter: 0
      };
    }
    case types.SUBMIT_ITEM_DETAILS: {
      let {
        vendorItems,
        productPrice,
        productDetails,
        dateDetails,
	//need to add market per item array
        vendorName,
        marketName,
        counter
      } = state;
      let senderObj = {
        item_name: vendorItems,
        vendor_item_price: productPrice,
        vendor_item_details: productDetails,
        market_vendor_date" dateDetails,
	//need to add market per item array--->   market_name: marketName
        vendor_name: vendorName,
      };
      console.log("sender Object", senderObj);
      counter = 0;
      return {
        ...state,
        vendorItems: [""],
        productPrice: [""],
        productDetails: [""],
        dateDetails: [""],
	//need to add market per item array
        vendorName: "",
        counter: 0
      };
    }
