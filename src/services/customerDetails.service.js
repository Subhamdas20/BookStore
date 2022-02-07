import CustomerDetailsModel from '../models/customerDetails.model'


export const editCustomerDetails = async (req, res) => {
        let newDetails = new CustomerDetailsModel({
            addressType: req.addressType,
            fullAddress: req.fullAddress,
            city: req.city,
            state: req.state
        })
        return await newDetails.save()
    }
   
