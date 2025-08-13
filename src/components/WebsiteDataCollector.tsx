import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Globe, Key, Download, Search, Database, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ScrapedData {
  title?: string;
  description?: string;
  markdown?: string;
  html?: string;
  rawHtml?: string;
  metadata?: any;
  links?: string[];
  images?: string[];
}

export const WebsiteDataCollector = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState(FirecrawlService.getApiKey() || '');
  const [url, setUrl] = useState('https://www.abvp.org/savishkar-innovative-and-futuristic-approaches-science-technology-ifast');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrapedData, setScrapedData] = useState<ScrapedData | null>(null);
  const [isApiKeySet, setIsApiKeySet] = useState(!!FirecrawlService.getApiKey());

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const isValid = await FirecrawlService.testApiKey(apiKey);
      if (isValid) {
        FirecrawlService.saveApiKey(apiKey);
        setIsApiKeySet(true);
        toast({
          title: "Success",
          description: "API key saved and validated successfully",
        });
      } else {
        toast({
          title: "Error",
          description: "Invalid API key. Please check and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to validate API key",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleScrapeWebsite = async () => {
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setProgress(20);
    setScrapedData(null);
    
    try {
      setProgress(60);
      const result = await FirecrawlService.scrapeWebsite(url);
      setProgress(80);
      
      if (result.success && result.data) {
        setScrapedData(result.data);
        setProgress(100);
        toast({
          title: "Success",
          description: "Website data collected successfully",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to collect website data",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error scraping website:', error);
      toast({
        title: "Error",
        description: "Failed to collect website data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setProgress(0);
    }
  };

  const downloadData = (data: any, filename: string, format: 'json' | 'txt' = 'json') => {
    const content = format === 'json' ? JSON.stringify(data, null, 2) : data;
    const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // if (!isApiKeySet) {
  //   return (
  //     <section className="py-20 relative">
  //       <div className="container mx-auto px-6 max-w-2xl">
  //         {/* <Card className="card-gradient border-border tech-shadow">
  //           <CardHeader className="text-center">
  //             <div className="w-16 h-16 tech-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
  //               <Key className="w-8 h-8 text-background" />
  //             </div>
  //             <CardTitle className="text-2xl text-foreground">Setup Firecrawl API</CardTitle>
  //             <p className="text-muted-foreground">
  //               Enter your Firecrawl API key to start collecting website data
  //             </p>
  //           </CardHeader>
  //           <CardContent className="space-y-6">
  //             <div className="space-y-2">
  //               <label htmlFor="apiKey" className="text-sm font-medium text-foreground">
  //                 Firecrawl API Key
  //               </label>
  //               <Input
  //                 id="apiKey"
  //                 type="password"
  //                 value={apiKey}
  //                 onChange={(e) => setApiKey(e.target.value)}
  //                 placeholder="fc-xxxxxxxxxxxxxxxxxxxxxxxx"
  //                 className="bg-muted/30 border-border"
  //               />
  //               <p className="text-xs text-muted-foreground">
  //                 Get your API key from{" "}
  //                 <a 
  //                   href="https://firecrawl.dev" 
  //                   target="_blank" 
  //                   rel="noopener noreferrer"
  //                   className="text-electric-blue hover:underline"
  //                 >
  //                   firecrawl.dev
  //                 </a>
  //               </p>
  //             </div>
  //             <Button
  //               onClick={handleSaveApiKey}
  //               disabled={isLoading || !apiKey.trim()}
  //               className="w-full tech-gradient text-background"
  //             >
  //               {isLoading ? "Validating..." : "Save & Validate API Key"}
  //             </Button>
  //           </CardContent>
  //         </Card> */}
  //       </div>
  //     </section>
  //   );
  // }

  // return (
  //   // <section className="py-20 relative">
  //   //   <div className="container mx-auto px-6">
  //   //     {/* Header */}
  //   //     <div className="text-center mb-12">
  //   //       <Badge className="mb-4 tech-gradient text-background">Website Data Collector</Badge>
  //   //       <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-cyber-cyan bg-clip-text text-transparent">
  //   //         Extract All Website Information
  //   //       </h2>
  //   //       <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
  //   //         Collect comprehensive data from any website including content, metadata, images, and links
  //   //       </p>
  //   //     </div>

  //   //     {/* Data Collection Form */}
  //   //     <div className="max-w-4xl mx-auto mb-12">
  //   //       <Card className="card-gradient border-border tech-shadow">
  //   //         <CardHeader>
  //   //           <CardTitle className="flex items-center space-x-2">
  //   //             <Globe className="w-5 h-5 text-electric-blue" />
  //   //             <span>Website URL</span>
  //   //           </CardTitle>
  //   //         </CardHeader>
  //   //         <CardContent className="space-y-6">
  //   //           <div className="flex space-x-4">
  //   //             <Input
  //   //               type="url"
  //   //               value={url}
  //   //               onChange={(e) => setUrl(e.target.value)}
  //   //               placeholder="https://example.com"
  //   //               className="flex-1 bg-muted/30 border-border"
  //   //             />
  //   //             <Button
  //   //               onClick={handleScrapeWebsite}
  //   //               disabled={isLoading || !url.trim()}
  //   //               className="tech-gradient text-background px-6"
  //   //             >
  //   //               {isLoading ? (
  //   //                 <>
  //   //                   <Search className="w-4 h-4 mr-2" />
  //   //                   Collecting...
  //   //                 </>
  //   //               ) : (
  //   //                 <>
  //   //                   <Database className="w-4 h-4 mr-2" />
  //   //                   Collect Data
  //   //                 </>
  //   //               )}
  //   //             </Button>
  //   //           </div>
              
  //   //           {isLoading && (
  //   //             <div className="space-y-2">
  //   //               <Progress value={progress} className="w-full" />
  //   //               <p className="text-sm text-muted-foreground text-center">
  //   //                 Extracting website data...
  //   //               </p>
  //   //             </div>
  //   //           )}
  //   //         </CardContent>
  //   //       </Card>
  //   //     </div>

  //   //     {/* Results */}
  //   //     {scrapedData && (
  //   //       <div className="max-w-6xl mx-auto">
  //   //         <Card className="card-gradient border-border tech-shadow">
  //   //           <CardHeader>
  //   //             <div className="flex items-center justify-between">
  //   //               <CardTitle className="flex items-center space-x-2">
  //   //                 <Database className="w-5 h-5 text-cyber-cyan" />
  //   //                 <span>Extracted Data</span>
  //   //               </CardTitle>
  //   //               <div className="flex space-x-2">
  //   //                 <Button
  //   //                   variant="outline"
  //   //                   size="sm"
  //   //                   onClick={() => downloadData(scrapedData, 'website-data', 'json')}
  //   //                   className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background"
  //   //                 >
  //   //                   <Download className="w-4 h-4 mr-1" />
  //   //                   JSON
  //   //                 </Button>
  //   //                 {scrapedData.markdown && (
  //   //                   <Button
  //   //                     variant="outline"
  //   //                     size="sm"
  //   //                     onClick={() => downloadData(scrapedData.markdown, 'website-content', 'txt')}
  //   //                     className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-background"
  //   //                   >
  //   //                     <Download className="w-4 h-4 mr-1" />
  //   //                     Markdown
  //   //                   </Button>
  //   //                 )}
  //   //               </div>
  //   //             </div>
  //   //           </CardHeader>
  //   //           <CardContent>
  //   //             <Tabs defaultValue="overview" className="w-full">
  //   //               <TabsList className="grid w-full grid-cols-4 bg-muted/30">
  //   //                 <TabsTrigger value="overview">Overview</TabsTrigger>
  //   //                 <TabsTrigger value="content">Content</TabsTrigger>
  //   //                 <TabsTrigger value="metadata">Metadata</TabsTrigger>
  //   //                 <TabsTrigger value="raw">Raw Data</TabsTrigger>
  //   //               </TabsList>

  //   //               <TabsContent value="overview" className="space-y-6">
  //   //                 <div className="grid md:grid-cols-2 gap-6">
  //   //                   <div className="space-y-4">
  //   //                     <h3 className="text-lg font-semibold text-foreground">Page Information</h3>
  //   //                     {scrapedData.title && (
  //   //                       <div>
  //   //                         <h4 className="font-medium text-electric-blue mb-1">Title</h4>
  //   //                         <p className="text-muted-foreground">{scrapedData.title}</p>
  //   //                       </div>
  //   //                     )}
  //   //                     {scrapedData.description && (
  //   //                       <div>
  //   //                         <h4 className="font-medium text-cyber-cyan mb-1">Description</h4>
  //   //                         <p className="text-muted-foreground">{scrapedData.description}</p>
  //   //                       </div>
  //   //                     )}
  //   //                     <div>
  //   //                       <h4 className="font-medium text-tech-orange mb-1">Source URL</h4>
  //   //                       <a 
  //   //                         href={url} 
  //   //                         target="_blank" 
  //   //                         rel="noopener noreferrer"
  //   //                         className="text-muted-foreground hover:text-electric-blue flex items-center space-x-1"
  //   //                       >
  //   //                         <span className="truncate">{url}</span>
  //   //                         <ExternalLink className="w-3 h-3" />
  //   //                       </a>
  //   //                     </div>
  //   //                   </div>

  //   //                   <div className="space-y-4">
  //   //                     <h3 className="text-lg font-semibold text-foreground">Data Summary</h3>
  //   //                     <div className="grid grid-cols-2 gap-4">
  //   //                       <div className="bg-muted/30 rounded-lg p-4 text-center">
  //   //                         <div className="text-2xl font-bold text-electric-blue">
  //   //                           {scrapedData.markdown?.length || 0}
  //   //                         </div>
  //   //                         <div className="text-sm text-muted-foreground">Characters</div>
  //   //                       </div>
  //   //                       <div className="bg-muted/30 rounded-lg p-4 text-center">
  //   //                         <div className="text-2xl font-bold text-cyber-cyan">
  //   //                           {scrapedData.images?.length || 0}
  //   //                         </div>
  //   //                         <div className="text-sm text-muted-foreground">Images</div>
  //   //                       </div>
  //   //                     </div>
  //   //                   </div>
  //   //                 </div>
  //   //               </TabsContent>

  //   //               <TabsContent value="content" className="space-y-4">
  //   //                 {scrapedData.markdown && (
  //   //                   <div>
  //   //                     <h3 className="text-lg font-semibold text-foreground mb-3">Markdown Content</h3>
  //   //                     <div className="bg-muted/30 rounded-lg p-4 max-h-96 overflow-auto">
  //   //                       <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
  //   //                         {scrapedData.markdown}
  //   //                       </pre>
  //   //                     </div>
  //   //                   </div>
  //   //                 )}
  //   //               </TabsContent>

  //   //               <TabsContent value="metadata" className="space-y-4">
  //   //                 {scrapedData.metadata && (
  //   //                   <div>
  //   //                     <h3 className="text-lg font-semibold text-foreground mb-3">Page Metadata</h3>
  //   //                     <div className="bg-muted/30 rounded-lg p-4 max-h-96 overflow-auto">
  //   //                       <pre className="text-sm text-muted-foreground">
  //   //                         {JSON.stringify(scrapedData.metadata, null, 2)}
  //   //                       </pre>
  //   //                     </div>
  //   //                   </div>
  //   //                 )}
  //   //               </TabsContent>

  //   //               <TabsContent value="raw" className="space-y-4">
  //   //                 <div>
  //   //                   <h3 className="text-lg font-semibold text-foreground mb-3">Complete Raw Data</h3>
  //   //                   <div className="bg-muted/30 rounded-lg p-4 max-h-96 overflow-auto">
  //   //                     <pre className="text-xs text-muted-foreground">
  //   //                       {JSON.stringify(scrapedData, null, 2)}
  //   //                     </pre>
  //   //                   </div>
  //   //                 </div>
  //   //               </TabsContent>
  //   //             </Tabs>
  //   //           </CardContent>
  //   //         </Card>
  //   //       </div>
  //   //     )}
  //   //   </div>
  //   // </section>
  // );
};