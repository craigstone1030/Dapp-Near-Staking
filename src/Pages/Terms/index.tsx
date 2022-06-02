import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { Stack, VStack, Flex, Text, Button } from '@chakra-ui/react'

import Title from './Title'

const Terms: FunctionComponent = (props) => {
  return (
    <VStack
      mt={'15px'}
      px={{ sm: '10px', md: '20px', lg: '110px' }}
      w={'100%'}
      spacing={'53px'}
    >
      <Title />
      <Flex
        mt={'46px'}
        rounded={'25px'}
        background={'#212121'}
        w='100%'
        align='center'
        px={{ sm: '10px', md: '20px', lg: '50px' }}
        py={{ sm: '10px', md: '20px', lg: '60px' }}
      >
        <Text
          fontSize='11px'
          fontWeight={'800'}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Adipiscing enim eu turpis egestas pretium aenean. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Turpis nunc eget lorem dolor sed viverra ipsum. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Faucibus purus in massa tempor. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Massa tincidunt dui ut ornare lectus sit. Ut ornare lectus sit amet est placerat. Porttitor lacus luctus accumsan tortor posuere ac. Lorem mollis aliquam ut porttitor leo a. Eget nullam non nisi est sit amet facilisis magna etiam. Ut etiam sit amet nisl purus in. Egestas fringilla phasellus faucibus scelerisque eleifend. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget.
          <br/><br/>
          Tempus urna et pharetra pharetra massa massa ultricies mi quis. Vitae ultricies leo integer malesuada nunc. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Leo vel fringilla est ullamcorper eget. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Eu non diam phasellus vestibulum lorem. Pharetra sit amet aliquam id diam. Porttitor massa id neque aliquam vestibulum morbi. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Urna nec tincidunt praesent semper feugiat. Dolor morbi non arcu risus quis varius. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Rhoncus est pellentesque elit ullamcorper dignissim. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Est ante in nibh mauris cursus mattis. Proin libero nunc consequat interdum. Eget duis at tellus at. Feugiat sed lectus vestibulum mattis ullamcorper. Fermentum odio eu feugiat pretium nibh ipsum consequat. Quis eleifend quam adipiscing vitae proin sagittis nisl.
          <br/><br/>
          Euismod lacinia at quis risus sed vulputate odio ut. Pulvinar elementum integer enim neque volutpat ac. Enim praesent elementum facilisis leo. Porta lorem mollis aliquam ut porttitor leo. Enim ut sem viverra aliquet eget sit. Et malesuada fames ac turpis egestas sed. Dictum sit amet justo donec enim diam vulputate ut. Imperdiet sed euismod nisi porta. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Cursus metus aliquam eleifend mi in nulla posuere. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Enim sed faucibus turpis in eu. Amet cursus sit amet dictum sit. Amet dictum sit amet justo donec. Quis blandit turpis cursus in hac habitasse.
          <br/><br/>
          Tempor orci dapibus ultrices in iaculis nunc sed augue. Lorem ipsum dolor sit amet consectetur. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Et ultrices neque ornare aenean euismod. A lacus vestibulum sed arcu non odio euismod. Adipiscing elit duis tristique sollicitudin. Purus viverra accumsan in nisl nisi scelerisque. Non consectetur a erat nam. Proin gravida hendrerit lectus a. Aenean et tortor at risus viverra adipiscing at in tellus. Vel pretium lectus quam id leo in vitae. Sodales ut etiam sit amet nisl purus in.
          <br/><br/>
          Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Porttitor eget dolor morbi non arcu risus quis varius quam. Urna et pharetra pharetra massa massa ultricies mi quis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Neque viverra justo nec ultrices dui sapien eget mi. Tristique senectus et netus et malesuada fames ac. At quis risus sed vulputate odio ut. In massa tempor nec feugiat nisl pretium. Odio morbi quis commodo odio aenean sed adipiscing. Elit sed vulputate mi sit. Ac placerat vestibulum lectus mauris ultrices. Sit amet cursus sit amet dictum sit amet. Volutpat lacus laoreet non curabitur. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Blandit libero volutpat sed cras ornare arcu dui.
          <br/><br/>
          Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Justo eget magna fermentum iaculis eu non. Iaculis urna id volutpat lacus laoreet non curabitur. Semper quis lectus nulla at volutpat diam. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Rutrum quisque non tellus orci. Integer quis auctor elit sed vulputate mi sit. Sodales neque sodales ut etiam. Sit amet justo donec enim diam vulputate ut pharetra. Tellus in hac habitasse platea dictumst. Mauris pellentesque pulvinar pellentesque habitant.
          <br/><br/>
          Tortor condimentum lacinia quis vel. Tincidunt praesent semper feugiat nibh sed. Faucibus a pellentesque sit amet porttitor. Duis convallis convallis tellus id interdum velit laoreet id. Quis commodo odio aenean sed adipiscing diam donec. Urna nec tincidunt praesent semper feugiat. Risus viverra adipiscing at in tellus integer feugiat. Egestas integer eget aliquet nibh praesent tristique magna sit. Diam phasellus vestibulum lorem sed risus ultricies tristique. Fermentum leo vel orci porta non pulvinar neque. Nullam ac tortor vitae purus faucibus ornare suspendisse.
          <br/><br/>
          Morbi tristique senectus et netus et. Ut placerat orci nulla pellentesque. Purus sit amet luctus venenatis lectus. Enim praesent elementum facilisis leo vel fringilla. Dolor sit amet consectetur adipiscing. Sit amet massa vitae tortor condimentum lacinia quis. Justo eget magna fermentum iaculis. Ante metus dictum at tempor commodo ullamcorper a. Blandit aliquam etiam erat velit. Vitae nunc sed velit dignissim. Adipiscing bibendum est ultricies integer quis auctor. Amet tellus cras adipiscing enim. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Massa id neque aliquam vestibulum morbi. Velit scelerisque in dictum non consectetur a erat. Malesuada fames ac turpis egestas maecenas pharetra convallis. Feugiat nibh sed pulvinar proin. Accumsan sit amet nulla facilisi morbi tempus iaculis urna.
          <br/><br/>
          Tortor posuere ac ut consequat semper viverra nam. Vel pharetra vel turpis nunc eget. Justo laoreet sit amet cursus sit amet dictum. Euismod elementum nisi quis eleifend quam adipiscing. Sodales ut eu sem integer. Eget nullam non nisi est sit amet. Tempus quam pellentesque nec nam aliquam sem. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Eu mi bibendum neque egestas. Lectus urna duis convallis convallis tellus id interdum velit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Pulvinar etiam non quam lacus suspendisse faucibus. Ut sem viverra aliquet eget.
          <br/><br/>
          A diam sollicitudin tempor id eu nisl nunc. Magnis dis parturient montes nascetur ridiculus mus mauris. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Enim facilisis gravida neque convallis a cras semper auctor. Posuere morbi leo urna molestie at elementum. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Lacinia at quis risus sed vulputate odio ut. Vel eros donec ac odio tempor orci dapibus. Amet consectetur adipiscing elit pellentesque. Est ante in nibh mauris cursus mattis molestie. Sed euismod nisi porta lorem mollis. Pretium nibh ipsum consequat nisl vel. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Enim sed faucibus turpis in eu. Id diam maecenas ultricies mi eget mauris. A diam maecenas sed enim. Quam lacus suspendisse faucibus interdum. Nam at lectus urna duis convallis convallis tellus id interdum. Dignissim enim sit amet venenatis urna cursus eget nunc. Posuere morbi leo urna molestie at elementum eu facilisis.
          <br/><br/>
          Fermentum iaculis eu non diam. Leo duis ut diam quam nulla porttitor massa. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis gravida neque convallis a cras. Lorem ipsum dolor sit amet consectetur. Massa enim nec dui nunc mattis enim ut. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Pulvinar pellentesque habitant morbi tristique senectus et. Ut sem viverra aliquet eget sit. Vel pretium lectus quam id leo. Orci porta non pulvinar neque laoreet.
          <br/><br/>
          Nascetur ridiculus mus mauris vitae. Faucibus ornare suspendisse sed nisi lacus. Tristique et egestas quis ipsum. Pellentesque nec nam aliquam sem et. Amet volutpat consequat mauris nunc. Neque laoreet suspendisse interdum consectetur libero. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Mattis molestie a iaculis at erat pellentesque adipiscing. Semper quis lectus nulla at volutpat. Hac habitasse platea dictumst vestibulum rhoncus. Turpis cursus in hac habitasse platea dictumst quisque. Etiam tempor orci eu lobortis.
          <br/><br/>
          Orci dapibus ultrices in iaculis nunc sed augue. Venenatis urna cursus eget nunc scelerisque viverra. Senectus et netus et malesuada. Est ante in nibh mauris cursus. Tortor aliquam nulla facilisi cras. Neque convallis a cras semper auctor neque. Pharetra convallis posuere morbi leo urna molestie at elementum. Quisque sagittis purus sit amet volutpat consequat. Enim praesent elementum facilisis leo vel. Duis tristique sollicitudin nibh sit amet commodo. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Urna duis convallis convallis tellus. Lacus vel facilisis volutpat est velit. Eget felis eget nunc lobortis mattis. Feugiat pretium nibh ipsum consequat.
          <br/><br/>
          Et leo duis ut diam quam nulla porttitor. Pretium fusce id velit ut tortor pretium viverra. Viverra aliquet eget sit amet tellus cras adipiscing enim. Mauris pharetra et ultrices neque. Lacus vel facilisis volutpat est velit egestas. Odio morbi quis commodo odio aenean. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Eget est lorem ipsum dolor. Quis imperdiet massa tincidunt nunc. Faucibus interdum posuere lorem ipsum dolor sit amet.
          <br/><br/>
          Pellentesque dignissim enim sit amet venenatis urna cursus. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ut placerat orci nulla pellentesque. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Purus non enim praesent elementum facilisis. Lobortis feugiat vivamus at augue eget. Sodales ut etiam sit amet nisl. Lectus arcu bibendum at varius vel pharetra. Maecenas pharetra convallis posuere morbi leo urna molestie at. Sit amet nisl purus in mollis nunc sed id.
          <br/><br/>
          Blandit massa enim nec dui nunc mattis enim. Purus faucibus ornare suspendisse sed nisi lacus sed. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Quis hendrerit dolor magna eget est lorem ipsum dolor. Ut tristique et egestas quis ipsum suspendisse ultrices. Amet dictum sit amet justo donec enim. Amet risus nullam eget felis. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Morbi enim nunc faucibus a pellentesque sit amet. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Ornare lectus sit amet est. Scelerisque varius morbi enim nunc faucibus a pellentesque. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Sagittis purus sit amet volutpat consequat mauris. Sed viverra ipsum nunc aliquet. Lectus magna fringilla urna porttitor rhoncus dolor. Tempor commodo ullamcorper a lacus vestibulum sed arcu non.
          <br/><br/>
          Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Pellentesque adipiscing commodo elit at imperdiet. In aliquam sem fringilla ut. Tortor condimentum lacinia quis vel. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla aliquet enim tortor at auctor urna nunc id cursus. Sed nisi lacus sed viverra tellus in hac. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Id venenatis a condimentum vitae. Elementum tempus egestas sed sed risus pretium. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Leo vel fringilla est ullamcorper eget. Odio euismod lacinia at quis risus sed vulputate. Risus ultricies tristique nulla aliquet enim. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Sed libero enim sed faucibus turpis. Eget nunc scelerisque viverra mauris. Aliquam faucibus purus in massa tempor nec feugiat. Mauris vitae ultricies leo integer malesuada nunc vel.
          <br/><br/>
          Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Massa massa ultricies mi quis hendrerit. Scelerisque eleifend donec pretium vulputate sapien nec. Eget duis at tellus at. Ultrices gravida dictum fusce ut placerat orci. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Malesuada fames ac turpis egestas integer. Diam volutpat commodo sed egestas. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.
          <br/><br/>
          Id aliquet risus feugiat in ante metus. Id diam vel quam elementum pulvinar etiam non quam lacus. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Varius vel pharetra vel turpis nunc. Quis auctor elit sed vulputate mi sit amet mauris commodo. Viverra justo nec ultrices dui sapien. Sit amet facilisis magna etiam tempor. Tristique senectus et netus et malesuada fames ac. Volutpat consequat mauris nunc congue nisi vitae suscipit. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Fringilla ut morbi tincidunt augue interdum.
          <br/><br/>
          Sagittis nisl rhoncus mattis rhoncus urna neque. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Vel fringilla est ullamcorper eget nulla. Et ultrices neque ornare aenean. Sit amet massa vitae tortor condimentum. Cursus metus aliquam eleifend mi in nulla posuere. Fames ac turpis egestas integer. Dolor sit amet consectetur adipiscing. Aenean et tortor at risus viverra adipiscing at in. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Tortor at risus viverra adipiscing at in tellus integer feugiat. Volutpat ac tincidunt vitae semper. Dui sapien eget mi proin sed libero enim sed. Amet massa vitae tortor condimentum. Pretium aenean pharetra magna ac placerat vestibulum lectus. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Dui id ornare arcu odio. Ipsum nunc aliquet bibendum enim. Sed vulputate mi sit amet mauris commodo quis imperdiet. Donec et odio pellentesque diam volutpat commodo sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Adipiscing enim eu turpis egest
          <br/><br/>
          as pretium aenean. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Turpis nunc eget lorem dolor sed viverra ipsum. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Faucibus purus in massa tempor. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Massa tincidunt dui ut ornare lectus sit. Ut ornare lectus sit amet est placerat. Porttitor lacus luctus accumsan tortor posuere ac. Lorem mollis aliquam ut porttitor leo a. Eget nullam non nisi est sit amet facilisis magna etiam. Ut etiam sit amet nisl purus in. Egestas fringilla phasellus faucibus scelerisque eleifend. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget.
          <br/><br/>
          Tempus urna et pharetra pharetra massa massa ultricies mi quis. Vitae ultricies leo integer malesuada nunc. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Leo vel fringilla est ullamcorper eget. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Eu non diam phasellus vestibulum lorem. Pharetra sit amet aliquam id diam. Porttitor massa id neque aliquam vestibulum morbi. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Urna nec tincidunt praesent semper feugiat. Dolor morbi non arcu risus quis varius. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Rhoncus est pellentesque elit ullamcorper dignissim. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Est ante in nibh mauris cursus mattis. Proin libero nunc consequat interdum. Eget duis at tellus at. Feugiat sed lectus vestibulum mattis ullamcorper. Fermentum odio eu feugiat pretium nibh ipsum consequat. Quis eleifend quam adipiscing vitae proin sagittis nisl.
          <br/><br/>
          Euismod lacinia at quis risus sed vulputate odio ut. Pulvinar elementum integer enim neque volutpat ac. Enim praesent elementum facilisis leo. Porta lorem mollis aliquam ut porttitor leo. Enim ut sem viverra aliquet eget sit. Et malesuada fames ac turpis egestas sed. Dictum sit amet justo donec enim diam vulputate ut. Imperdiet sed euismod nisi porta. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Cursus metus aliquam eleifend mi in nulla posuere. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Enim sed faucibus turpis in eu. Amet cursus sit amet dictum sit. Amet dictum sit amet justo donec. Quis blandit turpis cursus in hac habitasse.
          <br/><br/>
          Tempor orci dapibus ultrices in iaculis nunc sed augue. Lorem ipsum dolor sit amet consectetur. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Et ultrices neque ornare aenean euismod. A lacus vestibulum sed arcu non odio euismod. Adipiscing elit duis tristique sollicitudin. Purus viverra accumsan in nisl nisi scelerisque. Non consectetur a erat nam. Proin gravida hendrerit lectus a. Aenean et tortor at risus viverra adipiscing at in tellus. Vel pretium lectus quam id leo in vitae. Sodales ut etiam sit amet nisl purus in.
          <br/><br/>
          Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Porttitor eget dolor morbi non arcu risus quis varius quam. Urna et pharetra pharetra massa massa ultricies mi quis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Neque viverra justo nec ultrices dui sapien eget mi. Tristique senectus et netus et malesuada fames ac. At quis risus sed vulputate odio ut. In massa tempor nec feugiat nisl pretium. Odio morbi quis commodo odio aenean sed adipiscing. Elit sed vulputate mi sit. Ac placerat vestibulum lectus mauris ultrices. Sit amet cursus sit amet dictum sit amet. Volutpat lacus laoreet non curabitur. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Blandit libero volutpat sed cras ornare arcu dui.
          <br/><br/>
          Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Justo eget magna fermentum iaculis eu non. Iaculis urna id volutpat lacus laoreet non curabitur. Semper quis lectus nulla at volutpat diam. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Rutrum quisque non tellus orci. Integer quis auctor elit sed vulputate mi sit. Sodales neque sodales ut etiam. Sit amet justo donec enim diam vulputate ut pharetra. Tellus in hac habitasse platea dictumst. Mauris pellentesque pulvinar pellentesque habitant.
          
        </Text>
      </Flex>

    </VStack>
  );
}
export default Terms;

