import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import AccordionCustom from "../common/AccordionCustom";
// import Image from "next/image";

const FaqSection = () => {

    const faqs = [
        {
            id: 1,
            question: `Why join the cryptocorn.club`,
            ans: `Be part of a new community, part of an exclusive club. Together we go on a journey to the moon.
Our community consists  of top tier investors of launchpads, ICO investors and NFT maniacs.
`,
        },
        {
            id: 2,
            question: `How many cryptorns are available for minting?`,
            ans: `There will be a maximum of 5000 cryptocorns. Minting will cost 0.03 ETH.
We will reserve 300 cryptocorn´s for airdrops and giveaways.
In support of our favourite launchpads, we decided to do an airdrop on top wallet holders of paid.network and trustswap.com.
`,
        },
        {
            id: 3,
            question: `What benefit do I have,when I hold a cryptocorn?`,
            ans: `We will open an exclusive club,to discuss investment opportunities in the space and get access in presale and seed allocations`,
        },
        {
            id: 4,
            question: `What about the rarity of a cryptocorn`,
            ans: `We have 10 different background colours each of the same rarity, 5 different body colours some are more rare than other,5 different hairstyles with 6 different colours each,6 different horn colours ,6 wing colours,5 different eye expression and 2 different sunglasses.
Rainbow colour is rare but not always. Sunglasses are a rare item as well. We created 10 different clothes, 2 of them are rare. Try to find out which makes a unique and rare unicorn. All we can say they are all exclusive and adorable.`,
        },
    ]

    return (


        <Box
            py={'6rem'}
            id={'faq'}
            sx={{
                background: theme => theme.palette.primary.main,
            }}
        >
            <Container maxWidth={'xxl'}>

                <Typography
                    color={'#fff'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    variant={'h1'}
                    fontSize={'3rem'}
                >
                    Frequently Asked Questions
                </Typography>

                {/*     Accordion Section     */}

                <Box mt={'3rem'}>

                    {
                        faqs.map(({id,question,ans}) => (
                            <AccordionCustom
                                key={id}
                                heading={question}
                                description={[
                                    ans
                                ]}
                            />
                        ))
                    }

                </Box>

            </Container>
        </Box>

    );
};

export default FaqSection;