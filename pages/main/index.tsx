import { Box, Flex } from "@chakra-ui/react";
import CreatePost from "../../Components/essentials/CreatePost";
import Header from '../../Components/major/Header';
import ContainerLayout from '../../Layouts/ContainerLayout';
import PostContainer from '../../Components/essentials/PostContainer';
import CommunityBox from '../../Components/major/CommunitiesBox';
import CreatePostPanel from "../../Components/main/CreatePostBox";
import OthersComment from '../../Components/major/OthersComment';

const Index =() => {

    return (
        <>
            <Header/>
            
            <ContainerLayout>

                

                <Flex flexDirection={['column-reverse' , 'row']}
                    gap={'1em'}>

                   <Box w={['100%','70%']}>
                     <CreatePostPanel/>
                     <PostContainer item={'block'}/>
                     <PostContainer item={'none'}/>
                   </Box>

                    <Box display={['none' , 'block']}>
                        <CommunityBox/>
                    </Box>

                </Flex>




            </ContainerLayout>
            
        </>
    )
}


export default Index; 