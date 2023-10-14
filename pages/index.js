import {Box, Button, Container, Heading, HStack, Stack, Text, useColorMode,} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from "@chakra-ui/icons";
import {FaDiscord, FaGithub} from 'react-icons/fa';
import NextLink from "next/link";

export default function HomePage() {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <>
            <Button
                onClick={() => toggleColorMode()}
                pos="absolute"
                top="0"
                right="0"
                m="1rem"
            >
                {colorMode === "dark" ? (
                    <SunIcon color="orange.200"/>
                ) : (
                    <MoonIcon color="blue.700"/>
                )}
            </Button>

            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{base: 8, md: 14}}
                    py={{base: 20, md: 36}}>
                    <Heading
                        fontWeight={600}
                        fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
                        lineHeight={'110%'}>
                        Welcome to Kastel <br/>
                        <Text as={'span'} color={'purple.300'}>
                            We are a Chatting App like Discord & Guilded.
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        We are open sourced, so the community can help and learn. We also encrypt all user data so that
                        no one is able to view it, which applies to all types of data.
                    </Text>

                    <HStack
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <NextLink href={'/github'} target={"_blank"}>
                            <Button leftIcon={<FaGithub/>}>
                                Github
                            </Button>
                        </NextLink>
                        <NextLink href={'/discord'} target={"_blank"}>
                            <Button leftIcon={<FaDiscord/>}>
                                Discord
                            </Button>
                        </NextLink>
                    </HStack>

                </Stack>
            </Container>
        </>
    )
}
