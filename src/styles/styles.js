import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  texto: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    width: 300,
    padding: 10,
    borderWidth: 2,
    borderColor: "white",
    color: "black",
    borderRadius: 30,
    textAlign: "center",
    fontSize: 20
    
  },
  botao: {
    width: 200,
    padding: 10,
    backgroundColor: "transparent",
    color: "white",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
    marginTop: 20,
  },
  visao: {
    flexDirection: "row-reverse",
    width: 300,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  snoopyapp: {
    color: "white",
    fontSize: 30,
    fontStyle: "Italic",
    fontWeight: "bold",
  },
   logo: {
   width: 150,
   height: 150
  },
});
