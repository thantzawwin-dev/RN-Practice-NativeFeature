import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlacesList from "@/components/Places/PlacesList";

type Props = {};

const AllPlaces = (props: Props) => {
  return <PlacesList places={[]} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
