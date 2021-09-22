import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import AccordionCustom from "../common/AccordionCustom";
// import Image from "next/image";

const FaqSection = () => {

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

                    <AccordionCustom
                        heading={'Why join the fang gang?'}
                        description={[
                            ' Fang Gang is a collection developed by four NFT fanatic that have been in the NFT space\n' +
                            '                            since early March. All of us have worked on previous collections, helped out other\n' +
                            '                            communities and are collectors ourselves.',
                            'Our roadmap is comprised of real goals.',
                            ' Besides having a clean, thoughtful collection which we will grow a tightly knit\n' +
                            '                    community around, we\'re committed to help the preservation of wildlife by helping two\n' +
                            '                    NGOs along the way.',
                        ]}
                    />


                    <AccordionCustom
                        heading={'What about the minting process?'}
                        description={[
                            ' Minting will start on Aug 30th right here, on fanggang.io. 0.04 ETH per Fangster. Max 10\n' +
                            '                                Fangsters per transaction. The reveal will be the day after launch - 31st of August -\n' +
                            '                                because who would want to wait a week just to see their sick NFT?\n' +
                            '                            ',
                        ]}
                    />

                    <AccordionCustom
                        heading={'What can i do with my fangster?'}
                        description={[
                            ' Besides having the dopest character represent you on every platform, you\'ll be able to\n' +
                            '                                trade it, use it to enter our giveaways and claim exclusive rewards that are for holders\n' +
                            '                                only. Besides that it will also give you a voice in our community driven events.'
                        ]}
                    />

                    <AccordionCustom
                        heading={'Can\'t wait join the gang?'}
                        description={[
                            ' Head on over to our Discord server and get involved with the community. Or if you have\n' +
                            '                                any questions about NFTs, ETH, the blockchain, OpenSea or anything else! We\'re happy to\n' +
                            '                                help.',
                        ]}
                    />

                    <AccordionCustom
                        heading={'Tokenomicz'}
                        description={[
                            ' We have reserved 60 Fangsters for giveaways, events, collabs and 4 to portray our team\n' +
                            '                                members.',
                        ]}
                    />

                </Box>

            </Container>
        </Box>

    );
};

export default FaqSection;