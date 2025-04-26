// VendorDetailScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { vendors } from '../data/vendors';
import { Image } from 'react-native';

const categories = ['All', ...new Set(vendors.map(v => v.category))];

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState(null);

  let filteredVendors = vendors.filter((v) => {
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const lowerSearch = searchText.toLowerCase();
    const matchesSearch = v.name.toLowerCase().includes(lowerSearch)
      || v.category.toLowerCase().includes(lowerSearch)
      || v.distance.toLowerCase().includes(lowerSearch);
    return matchesCategory && matchesSearch;
  });

  if (sortOption === 'name') {
    filteredVendors.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === 'distance') {
    filteredVendors.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('VendorDetail', { vendor: item })}
    >
      {item.image && <Image source={item.image} style={styles.vendorImage} resizeMode="cover" />}
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.distance}>{item.distance}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search + Sort Row */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search by name, category, or distance..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <Picker
          selectedValue={sortOption}
          onValueChange={setSortOption}
          style={styles.sortPicker}
          dropdownIconColor="#333"
          mode="dropdown"
        >
          <Picker.Item label="Sort" value={null} />
          <Picker.Item label="Name (A-Z)" value="name" />
          <Picker.Item label="Distance" value="distance" />
        </Picker>
      </View>

      {/* Category Filters */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.filterBtn, selectedCategory === cat && styles.activeFilter]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[styles.filterText, selectedCategory === cat && styles.activeFilterText]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Vendor List */}
      <FlatList
        data={filteredVendors}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: '#FAF9F6',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sortPicker: {
    width: 50,
    marginLeft: 8,
    height: 40,
    color: '#333',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  filterScroll: {
    marginBottom: 8,
    flexGrow: 0,
  },
  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#EEE',
    borderRadius: 20,
    marginRight: 8,
  },
  activeFilter: {
    backgroundColor: '#4CAF50',
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  activeFilterText: {
    color: '#FFF',
  },
  card: {
    backgroundColor: '#F4F1EC',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
  },
  vendorImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 4,
    color: '#2C2C2C',
  },
  category: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#666666',
  },
  distance: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#333333',
  },
});


