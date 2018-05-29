import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

class PlaceList extends Component {

    render() {

        const placeOutput = this.props.places.map((place, index) => {
            return <ListItem
                key={index}
                placename={place}
                onItemCliecked={() => { this.props.onItemSelected(index) }} />
        });

        return (
            <FlatList style={styles.listContainer}
                data={this.props.places}

                renderItem={(info) => (
                    <ListItem
                        placename={info.item.name}
                        placeImage={info.item.image}
                        onItemCliecked={() => { this.props.onItemSelected(info.item.key) }} />
                )} />
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default PlaceList;