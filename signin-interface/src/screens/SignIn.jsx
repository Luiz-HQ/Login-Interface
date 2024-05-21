import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import image1 from "../assets/image1.svg"
import image2 from "../assets/image2.svg"

export function SignIn() {
    return (
        <>
            <main className='h-screen flex w-full'>
                <div className="bg-primary-foreground w-full h-full flex p-16">
                    <Carousel className="w-full max-w-xl">
                        <CarouselContent>
                            <CarouselItem>   
                                <div className="flex items-center justify-center aspect-square rounded p-8">
                                    <img src={image1} alt="imagem celular e tecnologia" />
                                </div>
                            </CarouselItem> 
                            <CarouselItem>   
                                <div className="flex items-center justify-center aspect-square rounded p-8">
                                    <img src={image2} alt="imagem de tecnologia" />
                                </div>
                            </CarouselItem> 
                        </CarouselContent>    
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel> 
                </div>
                <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
                    <Card className="w-full max-w-md">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold tracking-tighter">
                                Entre em sua conta
                            </CardTitle>
                            <CardDescription>
                                Utilize seu email e senha ou o GitHub para entrar.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <Label htmlFor="email">E-mail</Label>
                                <Input id="email" placeholder="example@email.com" type="email" />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="senha">Senha</Label>
                                <Input id="senha" placeholder="Digite sua senha" type="password" />
                            </div>
                            <Button className="mt-6 w-full">Entrar</Button>
                            <div className="flex items-center gap-6 mt-4">
                                <Separator />
                                <span className="text-xs text-muted-foreground">OU</span>
                                <Separator />
                            </div>
                            <Button variant="outline" className="mt-6 w-full"><GitHubLogoIcon className="mr-4"/>Entrar com o GitHub</Button>
                        </CardContent>
                        <CardFooter>
                            <p className="text-muted-foreground text-center text-sm">Ao entrar na nossa plataforma você concorda com nossos Termos de Uso e Política de Privacidade.</p>
                        </CardFooter>
                    </Card>
                </section>
            </main>
        </>
    )
}