import { Box } from "@chakra-ui/react";
import UserCommentBox from './UserCommentBox';
import OthersComment from './OthersComment';

const PostComment =() => {
    return (
        <>

            <Box>

                <OthersComment/>

                <UserCommentBox/>

            </Box>
        
        </>
    )
}

export default PostComment;