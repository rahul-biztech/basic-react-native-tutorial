import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

class PlaceList extends Component {

    render() {

        const placeOutput = this.props.places.map((place, index) => {
            return <ListItem
                key={place.id}
                placename={place}
                onItemCliecked={() => this.props.onItemSelected(place.id)} />
        });

        return (
            <FlatList style={styles.listContainer}
                data={this.props.places}

                renderItem={(info) => (
                    <ListItem
                        placename={info.item.name}
                        placeImage={info.item.image}
                        onItemCliecked={() => { this.props.onItemSelected(info.item.id) }} />
                )}
                keyExtractor={(info, index) => index + ""}
            />
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default PlaceList;