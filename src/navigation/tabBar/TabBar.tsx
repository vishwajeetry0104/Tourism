import React from 'react';
import {Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import Surfing from '../../assets/svg/surfing.svg';
import HomeIcon from '../../assets/svg/Icon.svg';
import Nightlife from '../../assets/svg/nightlife.svg';
import VulcanoIcon from '../../assets/svg/filter_hdr.svg';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarItem: {
    flex: 1,
    paddingVertical: 16,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <SafeAreaView style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const fontColor = isFocused ? '#008080' : '#001A1A';

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
            key={label}>
            {
              {
                Home: <HomeIcon fill={fontColor} width={24} height={24} />,
                Surfing: <Surfing fill={fontColor} width={24} height={24} />,
                Hula: <Nightlife fill={fontColor} width={24} height={24} />,
                Vulcano: (
                  <VulcanoIcon fill={fontColor} width={24} height={24} />
                ),
              }[label]
            }
            <Text style={{color: fontColor}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default TabBar;
