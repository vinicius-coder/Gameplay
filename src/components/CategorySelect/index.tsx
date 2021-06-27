import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';

export function CategorySelect() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 40 }}
        >

        </ScrollView>
    )
}