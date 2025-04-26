import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VendorDetailScreen({ route }) {
  const { vendor } = route.params;

  return (
    <View style={styles.container}>
      {/* Vendor Image */}
      {vendor.image && (
        <Image source={vendor.image} style={styles.vendorImage} resizeMode="cover" />
      )}
      {/* Vendor Info */}
      <Text style={styles.title}>{vendor.name}</Text>
      <Text style={styles.category}>{vendor.category}</Text>
      <Text style={styles.description}>{vendor.description}</Text>

      {/* Meta Info: Distance, Contact, Hours (each on its own line) */}
      <View style={styles.metaColumn}>
  <View style={styles.metaItem}>
    <Ionicons name="location-outline" size={18} color="#333" />
    <Text style={styles.metaText}>{vendor.distance}</Text>
  </View>
  <View style={styles.metaItem}>
    <Ionicons name="call-outline" size={18} color="#333" />
    <Text style={styles.metaText}>{vendor.contact}</Text>
  </View>
  <View style={styles.metaItem}>
    <Ionicons name="time-outline" size={18} color="#333" />
    <Text style={styles.metaText}>{vendor.hours}</Text>
  </View>
</View>



      {/* Product List */}
      <Text style={styles.sectionTitle}>Products:</Text>
      <FlatList
        data={vendor.products}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={styles.productRow}>
            <Ionicons name="cart-outline" size={16} color="#333" style={styles.cartIcon} />
            <Text style={styles.productItem}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAF9F6',
  },
  vendorImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 4,
    color: '#222',
  },
  category: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#444',
    marginBottom: 16,
  },
  metaColumn: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metaText: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    marginTop: 8,
    marginBottom: 4,
    color: '#222',
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cartIcon: {
    marginRight: 6,
  },
  productItem: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#333',
  },
});
