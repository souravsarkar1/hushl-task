export const initialFromValidations = (formData, toast) => {
    if (!formData.hotelName.name) {
        toast({
            title: "Please Enter the Hotel Name",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top"
        });
        return false;
    }
    else if (!formData.hotelName.address) {
        toast({
            title: "Please Enter the Hotel Address",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top"
        });
        return false;
    }
    return true;
}