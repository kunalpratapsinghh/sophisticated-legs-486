import React from 'react'
import { Box,Text, Container} from '@chakra-ui/react'

const Content = () => {


let data=[{heading:"Related Searches:",
text:"Mangoes Online | Fruit Baskets | International Fruits and Vegetables Online | Fresh Fruits | Fresh Vegetables | Leafy Vegetables | Organic Fruits and Vegetables"},
  {heading:"Buy Groceries Online",
    text:"Heading to the nearest supermarket with a list of monthly provisions is passé. Now visit our online staples store called bigbasket, one of the most famous online grocery shopping interfaces to stack up your monthly requirements of staples. Offering a host of options to choose from, this online grocery store has the advantage of selecting what you want, with offers and discounts that are made available to you. Revolutionising the practice of purchasing monthly staples in India, bigbasket with its express delivery, ensures you are never kept waiting for your order to reach you."},
    {heading:"Buy Staples Online",
    text:"Any online transaction comes with a prime advantage of completing chores without stepping out of one’s home. So is the case with bigbasket which enables you to order your kitchen consumables as and when they are exhausted. Sparing you of the stress of having to remember all the items that need to be ordered, bigbasket through its categorised listings, displays of all the necessary grocery staples you need!"},
    {heading:"Buy Oil and Masala Online",
    text:"Various food grains like rice, wheat and pulses form a large part of the Indian diet and are an absolute essential food items in the Indian kitchen. All our meals involve one or more of these grains and as such the need arises to replenish our monthly stock of food grains, oils and masala to be able to enjoy freshly cooked homely meals. Nearly every household in the country operates in this fashion where they stock kitchen food essentials every month to last them at least a month. Although shopping for these items is essential, it can be quite a dull and tiresome job. Not to mention there always would be something that was not available or it slipped out of your mind and then you have to run back to get that item. Luckily, in this digital age, you have the luxury to get all your kitchen essentials delivered to you right at your doorstep. Nowadays everything is available online you just need to look in the right place. For instance, you can get all your food grains, oils and varied Indian spices at a single place at bigbasket. Bigbasket has an extensive range of food grains and other food items that you can browse through and shop for it comfortably sitting in the cool and comfortable environment of your home. Whether it is your toor dal, moong dal or kidney beans, you can get them all at bigbasket. An advantage of buying your food grains online is the competitive prices that are offered. Take advantage of the low tur dal price, sugar price online and order today. Bigbasket truly offers an exhaustive list of food items so you can get everything from your desi ghee and sugar to basmati rice and masoor dal. Not only that, you can also find all the different variety of salt and sugar like Himalayan salt, rock salt, raw sugar etc. The only hard work that you need to do is scour your pantry and make a list of everything you need to buy and just relax and make a few swipes on your phone and your monthly grocery would be delivered to you soon. Get your monthly shopping list ready and enjoy the new and easy way to shop. Stop harassing yourself needlessly and buy atta online together with all your kitchen essentials only at bigbasket and also get attractive deals and discounts on them."},
    {heading:"Benefits Galore",
    text:"Giving a great deal of importance to delivery standards, we at bigbasket support delivery in major cities; our delivery guarantee comes in the form of an express delivery at your doorstep. With superior packaging, it is not only a matter of convenience but also a pleasure to buy grocery online. Enabling you to select different products that come with a discounted pricing, there is also an option to choose only those staples that are currently available with us. Identified as a customer-friendly online staples shopping interface, bigbasket masks the products which are out of stock when such a selection is made.There is even a variety of combo offers to choose from, to make grocery shopping a much more enjoyable process."},
    {heading:"A Motley of Brands Help You Make Right Choices",
    text:"Attracting health conscious customers to choose from an assortment of Ayurvedic spices including kesar, coriander powder and turmeric powder, an array of organic staples on bigbasket are steadily making their strong presence felt in Indian kitchens. Enlisting a number of cooking ingredients like masalas for that extra zing, to a preparation alongside different dals and pulses, you can choose between different types of edible oils and ghee brands. Products like sauces, dressings and dips which contribute their share of taste and flavour to a dish can also be sourced. With different varieties of flours and sooji, this platform enlists various brands of sugar and jaggery which are frequently consumed by people with a sweet tooth. Along with these, popular brands of raw rice, basmati rice and rice products feature on our list. At bigbasket, we also have a range of dry fruits, berries and nuts as healthy options for you to relish."},
    {heading:"Brands Which Spell Trust",
    text:"Be it a delivery in Chennai or a delivery in Pune, our quality standards are universal across pan India locations. While indigenous brands of groceries like bb Royal and bb Popular are enlisted, you have the luxury of choosing between different well-known grocery brands like Aashirwad, Fortune, 24 Mantra and Nandini, all of which are enlisted on our shopping platform."}];

  return (
    <Container maxWidth={"90%"}  boxShadow="xl" p={4}>
{data.map((el)=>
(
    <Box mt={"1rem"}>
        <Text fontSize={"16px"} fontFamily={"ProximaNovaA-Regular"} color={"#818285"} textAlign={"start"} > {el.heading}</Text>
        <Text mt={"5px"} lineHeight={"21px"} fontSize={"14px"} fontFamily={"ProximaNovaA-Regular"} color={"#818285"} textAlign={"justify"}>{el.text}</Text>
    </Box>
))}
        </Container>
  )
}

export default Content