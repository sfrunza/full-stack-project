require 'carrierwave/orm/activerecord'

class Picture < ActiveRecord::Base
    mount_uploader :photo, PhotoUploader
end
