import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,ImageBackground,ScrollView } from 'react-native';

import Carousel from 'react-native-snap-carousel';
export default class CarouselComponent extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              key:1,
              url:require('../images/home.jpg'),
              title:'B1:',
              text: "Tại màn hình đăng nhập chọn Quiz để thực hiện bài test tiếng anh",
          },
          {
              key:2,
              url:require('../images/level.jpg'),
              title:"B2:",
              text: "Bấm chọn level tùy theo độ khó bạn muốn thực hiện như Easy, Normal, Hard ",
          },
          {
            key:3,
            url:require('../images/numberquestion.jpg'),
              title:"B3:",
              text: "Nhập chọn số câu hỏi bạn muốn thực hiện tối thiểu 5 câu và tối đa 10 câu",
          },
          {
              key:4,
              url:require('../images/question.jpg'),
              title:"B4:",
              text: "Sau khi dữ liệu đã được tải lên bắt đầu thực hiện bài test",
          }
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              borderRadius: 5,
              height: 300,
              width:350,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>

        <ImageBackground source={item.url} style={{width:'100%',height:500}} >
            <View style={{position:'relative'}}>
                <View style={{position:'absolute',bottom:-100,left:-120}}>
                        <Text style={{fontSize: 15,fontWeight:'bold'}}>{item.title}</Text>
                        <Text style={{fontWeight:'bold',opacity:0.8}}>{item.text}</Text>
                </View>
          
            </View>
           
         </ImageBackground>
           
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'white',height:1000 }}>
            <ScrollView style={{ flex: 1, flexDirection:'row', height:'100%'}}>
                <Carousel
                  layout={"stack"}
                  layoutCardOffset={9}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={500}
                  itemWidth={400}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } 
                  autoplay={false}
                  loop={true}
                  />
            </ScrollView>
          </SafeAreaView>
        );
    }
}