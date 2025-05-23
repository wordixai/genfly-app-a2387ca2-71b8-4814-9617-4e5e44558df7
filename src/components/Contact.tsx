import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience the perfect blend of great coffee and warm hospitality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <MapPin className="mr-2" size={20} />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  123 Coffee Street<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <Clock className="mr-2" size={20} />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                  <p>Saturday: 7:00 AM - 9:00 PM</p>
                  <p>Sunday: 7:00 AM - 7:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <Phone className="mr-2" size={20} />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Phone className="mr-2" size={16} />
                    (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-2" size={16} />
                    hello@brewandbean.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <div className="h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p className="text-sm">Map integration would go here</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Contact