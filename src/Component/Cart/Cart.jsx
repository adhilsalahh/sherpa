import { Divider, TextField, Button, Grid, Modal, Box, Card } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import React from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";

// Sample items array for rendering CartItems


const items = [1, 1];
export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  outline: "none",
  background:'black',
  border: '2px solid #000',
  boxShadow: 20,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: ""
};

// Validation schema for Formik
const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street address is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string().required("Pincode is required"),
  city: Yup.string().required("City is required")
});

function Cart() {
  const createOrderUsingSelectedAddress = () => {
    // Your logic here
  };

  const handleOpenAddressModal = () => setOpen(true);

  const showButton = true; // Define `showButton` as true or set based on your logic

  const [open, setOpen] = React.useState(false);
  const handleSubmit = (values) => {
    // Handle form submission
    console.log(" form    value",values );
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <main className="lg:flex justify-between">
        {/* Left Section: Cart Items */}
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹599</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>₹21</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>₹30</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-white">
              <p>Total Pay</p>
              <p>₹650</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <Divider orientation="vertical" flexItem />

        {/* Right Section: Address Selection */}
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">Choose Delivery Address</h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  key={index}
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              {/* Add New Address Card */}
              <Card className="flex gap-5 w-64 p-5 bg-gray-800 text-white">
                <AddLocationAltIcon />
                <div className="space-y-3">
                  <h1 className="font-semibold text-lg">Add New Address</h1>
                  <p className="text-gray-300">
                    Kochi, New Shivam Building, 673638, Kerala, India
                  </p>
                  {showButton && (
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={handleOpenAddressModal}
                    >
                      Add
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Button onClick={handleOpenAddressModal}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Formik 
          initialValues={initialValues} 
          validationSchema={validationSchema} 
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field 
                  as={TextField} 
                  name="streetAddress" 
                  label="Street Address" 
                  fullWidth 
                  variant="outlined" 
                  helperText={<ErrorMessage name="streetAddress" />} 
                />
              </Grid>

              <Grid item xs={12}>
                <Field 
                  as={TextField} 
                  name="state" 
                  label="State" 
                  fullWidth 
                  variant="outlined" 
                  helperText={<ErrorMessage name="state" />} 
                />
              </Grid>

              <Grid item xs={12}>
                <Field 
                  as={TextField} 
                  name="city" 
                  label="City" 
                  fullWidth 
                  variant="outlined" 
                  helperText={<ErrorMessage name="city" />} 
                />
              </Grid>

              <Grid item xs={12}>
                <Field 
                  as={TextField} 
                  name="pincode" 
                  label="Pincode" 
                  fullWidth 
                  variant="outlined" 
                  helperText={<ErrorMessage name="pincode" />} 
                />
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit" color="primary">
                  Deliver Here
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Modal>
    </div>
  );
}

export default Cart;
