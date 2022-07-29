// import {
//   Heading,
//   Stack,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
// } from "@chakra-ui/react";
// import useForm from "../hooks/useForm";
// import { signInWithMagicLink } from "../services/auth";

// const MagicLinkForm = () => {
//   const { formValues, handleInputChange } = useForm({ email: "" });
//   const { email } = formValues;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await signInWithMagicLink(email);
//     console.log(result);
//   };

//   return (
//     <>
//       <Heading fontSize="2xl" mb="20px">
//         Login using Magic Link
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={4}>
//           <FormControl id="memail">
//             <FormLabel>Email</FormLabel>
//             <Input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleInputChange}
//             />
//           </FormControl>
//           <Button type="submit" colorScheme="blue">
//             Send Link
//           </Button>
//         </Stack>
//       </form>
//     </>
//   );
// };

// export default MagicLinkForm;
